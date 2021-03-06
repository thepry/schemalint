export namespace nameInflection {
    export const name: string;
    export namespace docs {
        export const description: string;
        export const url: string;
    }
    export function process({ options, schemaObject, report }: {
        options: any;
        schemaObject: any;
        report: any;
    }): void;
}
