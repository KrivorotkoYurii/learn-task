import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <QueryClientProvider client={queryClient}>
    <Root />
  </QueryClientProvider>,
);
