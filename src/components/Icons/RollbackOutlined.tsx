import { RollbackOutlined as BaseRollbackOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RollbackOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRollbackOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rollback-outlined text-xl"
            role="img"
            aria-label="rollback-outlined"
            innerHTML={svgHTMLString}
        />
    );
};