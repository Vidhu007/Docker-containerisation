import Date from '../components/date';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	allPostsData: Post[];
};

const Home = ({ allPostsData }: Props) => {
	return (
		<h1>Hello , I am Vidhu </h1>
	)
};

export default Home;
export async function getStaticProps() {
	const allPostsData = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content','coverImage']);
	return {
		props: {
			allPostsData
		}
	};
}
