import { StaticImageData } from "next/image";
import { TagValue } from "@/data/tags";

export default interface Project {
  name: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  projectUrl: string;
  siteUrl?: string;
  createdDate: Date;
  tags: TagValue[];
}
