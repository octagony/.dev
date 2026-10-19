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