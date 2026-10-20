'use server';

import { getAuthToken } from "@lib/api/getToken";
import { API_BASE_URL } from "@lib/utils";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function requireAuth() {
	const token = await getAuthToken();

	if (!token) {
		redirect('/admin/login');
	}
	return token;
}

export async function createProject(data: FormData) {
	const token = await requireAuth();

	const stackTitles = data.get('stackTitles') as string;
	const stackArray = stackTitles
		? stackTitles.split(',').map((t) => ({ title: t.trim(), icon: 'react' }))
		: [];

	const payload = {
		title: data.get('title'),
		descriptionShort: data.get('descriptionShort'),
		descriptionFull: data.get('descriptionFull'),
		image: data.get('image'),
		link: data.get('link'),
		projectLink: (data.get('projectLink') as string) || null,
		githubLink: data.get('githubLink'),
		stack: stackArray,
	};

	const res = await fetch(`${API_BASE_URL}/projects`, {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(errorText);
	}

	revalidatePath('/admin');
	redirect('/admin');
};

export async function updateProject(id: number, data: FormData) {
	const token = await requireAuth();

	const stackTitles = data.get('stackTitles') as string;
	const stackArray = stackTitles
		? stackTitles.split(',').map((t) => ({ title: t.trim(), icon: t.trim().toLowerCase() }))
		: [];

	console.log('🔍 [Server Action updateProject] Отправляемый stackArray:', JSON.stringify(stackArray));


	const payload = {
		title: data.get('title'),
		descriptionShort: data.get('descriptionShort'),
		descriptionFull: data.get('descriptionFull'),
		image: data.get('image'),
		link: data.get('link'),
		projectLink: (data.get('projectLink') as string) || null,
		githubLink: data.get('githubLink'),
		stack: stackArray,
	};

	const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
		method: 'PUT',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(errorText);
	}

	revalidatePath('/admin');
	revalidatePath(`/projects/${id}`);
	redirect('/admin');
};

export async function deleteProject(id: number) {
	const token = await requireAuth();

	const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
		method: 'DELETE',
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(errorText);
	}

	revalidatePath('/admin');
	return { success: true };
}