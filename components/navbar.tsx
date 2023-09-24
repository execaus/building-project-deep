import { Button, VStack } from '@chakra-ui/react';
import {
	AccountTreeOutlined,
	BookOutlined,
	CalendarMonthOutlined,
	DescriptionOutlined,
	FolderOutlined
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export function NavBar() {
	const router = useRouter()

	return <VStack h={"100vh"} p={2}>
		<Button onClick={() => router.push('/passport')}>
			<BookOutlined />
		</Button>
		<Button onClick={() => router.push('/dashboard')}>
			<CalendarMonthOutlined />
		</Button>
		<Button onClick={() => router.push('/documents')}>
			<DescriptionOutlined />
		</Button>
		<Button onClick={() => router.push('/projects')}>
			<FolderOutlined />
		</Button>
		<Button onClick={() => router.push('/status-list')}>
			<AccountTreeOutlined />
		</Button>
	</VStack>
}
