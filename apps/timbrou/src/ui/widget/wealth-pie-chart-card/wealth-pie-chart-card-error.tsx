'use client'

import { ErrorBoundary } from 'react-error-boundary'

import { Card } from '@repo/ui/card'

export const WealthPieChartCardError = () => {
  return (
    <Card x-chunk="month-investments-card">
      <Card.Header className="pb-2">
        <Card.Description>Erro</Card.Description>
        <Card.Title className="text-sm">Não foi possível carregar os dados</Card.Title>
      </Card.Header>
    </Card>
  )
}

export const WealthPieChartCardErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <ErrorBoundary fallback={<WealthPieChartCardError />}>{children}</ErrorBoundary>
}
