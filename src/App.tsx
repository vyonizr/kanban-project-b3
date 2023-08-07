import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import SideMenuLayout from './layouts/SideMenuLayout'
import TaskSummary from './features/tasks/components/TaskSummary'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SideMenuLayout />,
      children: [
        {
          path: '/',
          element: <TaskSummary />,
        },
        {
          path: 'task-list',
          element: <h1>Task List</h1>,
        },
        {
          path: 'task-progress',
          element: <h1>Task Progress</h1>,
        },
      ],
    },
  ])

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
