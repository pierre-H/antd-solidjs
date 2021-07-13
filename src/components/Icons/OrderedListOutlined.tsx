import { OrderedListOutlined as BaseOrderedListOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const OrderedListOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseOrderedListOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ordered-list-outlined text-xl"
            role="img"
            aria-label="ordered-list-outlined"
            innerHTML={svgHTMLString}
        />
    );
};