import React from 'react';
import { Page } from '../components/page';
import Passport from "../components/passport/Passport";

function Content() {
	return (
		<Passport/>
	);
}

export default function PassportPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

