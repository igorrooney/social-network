import React, { ComponentType } from 'react'
import Spinner from 'components/Spinner'

export function withSuspense <WCP> (WrappedComponent: ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <React.Suspense fallback={<Spinner />}>
        <WrappedComponent {...props} />
      </React.Suspense>
    )
  }
}
