import { cn } from "@/lib/utils"

function SidebarHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <span className={cn("font-normal text-3xl", className)} {...props} />
}

function SidebarGroupText({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <span
      className={cn("font-popp font-bold text-xs text-secondary", className)}
      {...props}
    />
  )
}

function SidebarItemText({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <span
      className={cn("font-mono font-medium text-sm md:text-xs", className)}
      {...props}
    />
  )
}

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn("flex max-w-[980px] flex-col gap-1", className)}
      {...props}
    >
      {children}
    </section>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-normal font-popp text-2xl lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <span
      className={cn(
        "lg:max-w-[750px] font-mono font-normal text-base text-secondary",
        className
      )}
      {...props}
    />
  )
}

export {
  SidebarHeading,
  SidebarGroupText,
  SidebarItemText,
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
}
