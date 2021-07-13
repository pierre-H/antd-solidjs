import { AccountBookTwoTone as BaseAccountBookTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AccountBookTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAccountBookTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-account-book-two-tone text-xl"
            role="img"
            aria-label="account-book-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};