import type { ReactNode } from 'react'
import cn from '../../../../utils/tailwindMerge'

function StudentSection({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return <section className={cn('space-y-10', className)}>{children}</section>
}

function Header({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return <section className={cn('space-y-4', className)}>{children}</section>
}

StudentSection.Header = Header;
export default StudentSection;