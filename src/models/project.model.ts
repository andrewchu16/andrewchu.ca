import { StaticImageData } from "next/image";
import Tag from "./tag.model";

export default interface Project {
    name: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    projectUrl: string;
    siteUrl?: string;
    createdDate: Date;
    tags: Tag[];
}