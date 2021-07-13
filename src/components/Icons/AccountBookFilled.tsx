import { AccountBookFilled as BaseAccountBookFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AccountBookFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAccountBookFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-account-book-filled text-xl"
            role="img"
            aria-label="account-book-filled"
            innerHTML={svgHTMLString}
        />
    );
};