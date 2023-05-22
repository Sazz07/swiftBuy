import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  )
}

export default App
