import { StoreProvider } from './store-provider';
import { DeepClient, useDeep, } from '@deep-foundation/deeplinks/imports/client';
import { WithProvidersAndLogin } from './with-providers-and-login';

export interface PageParam {
	children: JSX.Element,
}

export function Page({ children }: PageParam) {
	return (
		<StoreProvider>
			<WithProvidersAndLogin>
				{ children }
			</WithProvidersAndLogin>
		</StoreProvider>
	);
}

interface WithDeepProps {
	renderChildren: (param: { deep: DeepClient }) => JSX.Element;
}

function WithDeep({ renderChildren }: WithDeepProps) {
	const deep = useDeep();
	return deep.linkId ? renderChildren({ deep }) : null;
}
