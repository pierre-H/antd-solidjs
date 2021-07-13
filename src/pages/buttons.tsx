import { createSignal } from "solid-js";
import { Button } from "../components/button";
import { ComponentDescription } from "../components/ComponentDescription";

function LoadingButton() {
    const [loading, setLoading] = createSignal<boolean>(false);

    const disable = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <Button type="primary" loading={loading()} onclick={disable}>
            Loading
        </Button>
    );
}

export default function Buttons() {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <ComponentDescription title="Types">
                    <Button>Default</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="link">Link</Button>
                    <Button type="text">Text</Button>
                </ComponentDescription>
                <ComponentDescription title="Sizes">
                    <Button type="primary" size="large">
                        Large
                    </Button>
                    <Button>Default</Button>
                    <Button type="primary" size="small">
                        Small
                    </Button>
                </ComponentDescription>
                <ComponentDescription title="Loading">
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <LoadingButton />
                </ComponentDescription>
                <ComponentDescription title="Ghost" class="bg-gray-300 p-3">
                    <Button ghost type="primary">
                        Primary
                    </Button>
                    <Button ghost>Default</Button>
                    <Button ghost type="dashed">
                        Dashed
                    </Button>
                </ComponentDescription>
                <ComponentDescription title="Block" class="space-y-2" noFlex>
                    <Button block type="primary">
                        Primary
                    </Button>
                    <Button block>Default</Button>
                    <Button block type="dashed">
                        Dashed
                    </Button>
                </ComponentDescription>
            </div>
            <div></div>
        </div>
    );
}
