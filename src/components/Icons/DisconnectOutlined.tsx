import { DisconnectOutlined as BaseDisconnectOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DisconnectOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDisconnectOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-disconnect-outlined text-xl"
            role="img"
            aria-label="disconnect-outlined"
            innerHTML={svgHTMLString}
        />
    );
};