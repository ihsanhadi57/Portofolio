import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from '@/components/HomePage'

const ProjectDetail = lazy(() =>
  import('@/components/ProjectDetail').then((module) => ({
    default: module.ProjectDetail,
  }))
)

const MainAppLayout: React.FC = () => {
  const location = useLocation()
  const isProjectDetail = location.pathname.startsWith('/project/')

  return (
    <div className="relative min-h-screen bg-surface">
      <HomePage />
      {isProjectDetail && (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      )}
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainAppLayout />
    </BrowserRouter>
  )
}

export default App
