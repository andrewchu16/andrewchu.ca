import POSTS from "$lib/data/posts";
import POSTERS from "$lib/data/posters";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
	return {
		posts: POSTS,
        posters: POSTERS
	};
};