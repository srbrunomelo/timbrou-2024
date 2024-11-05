import { Suspense } from 'react'
import { WealthCategoriesCardsErrorBoundary } from './wealth-categories-cards-error'
import { WealthCategoriesCardsLoading } from './wealth-categories-cards-loading'
import { WealthCategoriesCardsSuccess } from './wealth-categories-cards.server'

export const WealthCategoriesCards = ({ month }: { month?: string }) => {
  return (
    <WealthCategoriesCardsErrorBoundary>
      <Suspense fallback={<WealthCategoriesCardsLoading />}>
        <WealthCategoriesCardsSuccess month={month} />
      </Suspense>
    </WealthCategoriesCardsErrorBoundary>
  )
}
