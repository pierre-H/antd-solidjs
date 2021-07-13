import { AccountBookOutlined as BaseAccountBookOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AccountBookOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAccountBookOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-account-book-outlined text-xl"
            role="img"
            aria-label="account-book-outlined"
            innerHTML={svgHTMLString}
        />
    );
};