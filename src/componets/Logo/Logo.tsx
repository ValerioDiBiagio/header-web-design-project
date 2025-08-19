export type logoProps = {
    text: string;

}

export const Logo = ({ text }: logoProps) => {
    return (
        <div>{text}</div>
    )

}