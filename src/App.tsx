import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import SideMenu from './components/SideMenu'
import TaskSummary from './features/tasks/components/TaskSummary'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu />
          <TaskSummary />
        </div>
      ),
    },
    {
      path: 'task-list',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu />
          <h1>Task List</h1>
        </div>
      ),
    },
    {
      path: 'task-progress',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu />
          <h1>Task Progress</h1>
        </div>
      ),
    },
  ])

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
