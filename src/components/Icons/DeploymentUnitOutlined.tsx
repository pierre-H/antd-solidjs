import { DeploymentUnitOutlined as BaseDeploymentUnitOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DeploymentUnitOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeploymentUnitOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-deployment-unit-outlined text-xl"
            role="img"
            aria-label="deployment-unit-outlined"
            innerHTML={svgHTMLString}
        />
    );
};