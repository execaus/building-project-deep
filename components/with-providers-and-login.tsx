import { ChakraProvider } from "@chakra-ui/react";
import { DeepContext, DeepProvider } from "@deep-foundation/deeplinks/imports/client";
import { TokenProvider } from "@deep-foundation/deeplinks/imports/react-token";
import { useLocalStore } from "@deep-foundation/store/local";
import { CapacitorStoreKeys } from "../imports/capacitor-store-keys";
import { WithLogin } from "./with-login";
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { useContext } from "react";
import { processEnvs } from "../imports/process-envs";

export function WithProvidersAndLogin({ children }: { children: JSX.Element }) {
  const [ gqlPath ] = useLocalStore(CapacitorStoreKeys[CapacitorStoreKeys.GraphQlPath], processEnvs.graphQlPath)
  return (
    <>
      <ChakraProvider>
        <TokenProvider>
          <ApolloClientTokenizedProvider
            options={{
              client: 'deeplinks-app',
              path: gqlPath,
              ssl: true,
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYWRtaW4iLCJ4LWhhc3VyYS11c2VyLWlkIjoiMzgwIn0sImlhdCI6MTY5NTU0MjAzNn0.ff7Tn_iQT6gauiKzbyBd8jeFur_mMNQ9kjGO6zRmVeE',
              ws: !!process?.browser,
            }}
          >
            <DeepProvider>
                {children}
            </DeepProvider>
          </ApolloClientTokenizedProvider>
        </TokenProvider>
      </ChakraProvider>
    </>
  );
}
