import { AntDesignOutlined as BaseAntDesignOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AntDesignOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAntDesignOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ant-design-outlined text-xl"
            role="img"
            aria-label="ant-design-outlined"
            innerHTML={svgHTMLString}
        />
    );
};