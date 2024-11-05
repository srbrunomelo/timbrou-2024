'use client'

import { ErrorBoundary } from 'react-error-boundary'

import { Card } from '@repo/ui/card'

export const WealthCategoriesCardsError = () => {
  return (
    <>
      <Card x-chunk="wealth-category-card-1">
        <Card.Header className="pb-2">
          <Card.Description>Erro</Card.Description>
          <Card.Title className="text-sm">Não foi possível carregar os dados</Card.Title>
        </Card.Header>
      </Card>
      <Card x-chunk="wealth-category-card-2">
        <Card.Header className="pb-2">
          <Card.Description>Erro</Card.Description>
          <Card.Title className="text-sm">Não foi possível carregar os dados</Card.Title>
        </Card.Header>
      </Card>
      <Card x-chunk="wealth-category-card-3">
        <Card.Header className="pb-2">
          <Card.Description>Erro</Card.Description>
          <Card.Title className="text-sm">Não foi possível carregar os dados</Card.Title>
        </Card.Header>
      </Card>
    </>
  )
}

export const WealthCategoriesCardsErrorBoundary = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <ErrorBoundary fallback={<WealthCategoriesCardsError />}>{children}</ErrorBoundary>
}
