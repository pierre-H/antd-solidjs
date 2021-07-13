import { OneToOneOutlined as BaseOneToOneOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const OneToOneOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseOneToOneOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-one-to-one-outlined text-xl"
            role="img"
            aria-label="one-to-one-outlined"
            innerHTML={svgHTMLString}
        />
    );
};