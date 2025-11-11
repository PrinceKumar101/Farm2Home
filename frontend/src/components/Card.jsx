import clsx from "clsx"

const Card = ({ className, ...props }) => {
    return (
        <div data-slot="card"
        className={
            clsx(
                "rounded-lg border bg-card text-card-foreground shadow-sm p-4",
                className
            )
        } {...props} />

    )
}

const CardHeader = ({ className, ...props }) => {
    return (
        <div data-slot="card-header"
         className={clsx(
            "font-bold text-lg mb-2",
            className
        )} {...props} />
    )
}

const CardBody = ({ className, ...props }) => {
    return (
        <div data-slot="card-body"
         className={clsx(
            "text-sm text-muted-foreground",
            className
        )} {...props} />
    )
}
export { Card, CardHeader, CardBody }