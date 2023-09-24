import React from 'react';
import { Page } from '../components/page';
import { useRouter } from 'next/navigation';

function Content() {
	return (
		<div>projects</div>
	);
}

export default function ProjectsPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

