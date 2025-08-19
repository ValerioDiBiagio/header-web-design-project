// Importare i tipi Meta e StoryObj dalla libreria React di Storybook
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/spacing.css"

// Definire i metadati per Storybook, come il titolo della storia e le configurazioni di layout.
const meta: Meta = {
    title: "Atoms/Spacing",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"]
};

export default meta;

// Definire il tipo per le storie di Storybook basato sui metadati.
type Story = StoryObj<typeof meta>;

// Componente funzionale React per calcolare e visualizzare il valore di una variabile CSS.
const SpaceCalc = ({ value }: { value: string }) => {

    const spacing = React.useMemo(() => {

        const bodyStyle = window.getComputedStyle(document.body);
        return bodyStyle.getPropertyValue(value);
    }, [value])

    return <span>{spacing}</span>;
}

// Definizione della storia "Default" per il componente Spacing in Storybook.
export const Default: Story = {
    render: () => (
        <>
            <h1>Spacing</h1>
            <p className="font-size-body">Our spacing variables use a mechanism to ensure that the spacing is scalable accross different screen size. * This is done by using the `clamp()` function. * The minimum viewport width is 400px and the maximum is 1200px.</p>

            <dl>
                {['zero', 'xs', 'sm', 'md', 'lg', 'xl'].map((key) => (
                    <React.Fragment key={key}>
                        <dt>{key}</dt>
                        <dd style={{ ['--story-spacing' as any]: `var(--spacing-${key})` }}>
                            <span>
                                <SpaceCalc value={`--spacing-${key}`} />
                            </span>
                            <span className="spacing-info" />
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </>
    )
};