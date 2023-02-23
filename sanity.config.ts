import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import MyStudioNavbar from "./components/MyStudioNavbar"
import Logo from "./components/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Desmond_Blog_Studio",
  title: "Desmond Blog Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
       logo:Logo, 
      navbar: MyStudioNavbar
    }
  },
  theme: myTheme,
});
