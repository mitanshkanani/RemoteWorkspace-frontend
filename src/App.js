import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import Media from "./pages/Media";
import Collaborators from "./pages/Collaborators";
import Files from "./pages/Files";
import Landing from "./pages/Landing";

// layouts
import RootLayout from "./layouts/RootLayout";
import AccessLayout from "./layouts/AccessLayout";
import ProjectsLayout from "./layouts/ProjectsLayout";
import ResourcesLayout from "./layouts/ResourcesLayout";
import ActionPage from "./pages/ActionPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route index path="/" element={<Landing />} />

      <Route element={<RootLayout />} >
        <Route path="action" element={<ActionPage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="workspace" element={<AccessLayout />} >

          <Route path="projects" element={<ProjectsLayout />} >
            <Route index element={<Projects />} />
            <Route path="collaborators" element={<Collaborators />} />
          </Route>

          <Route path="resources" element={<ResourcesLayout />} >
            <Route index element={<Resources />} />
            <Route path="files" element={<Files />} />
          </Route>

          <Route path="notes" element={<Notes />} />
          <Route path="media" element={<Media />} />

        </Route>
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
