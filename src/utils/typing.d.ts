export interface ProjectData {
    name: string,
    date: string,
    description: string,
    image: string
    stack: string[],
    demoUrl?: string,
    repoUrl?: string
}

export interface FormInputProps {
    inputType: string;
    inputName: string;
    label: string
    onInputChange: () => void;
}

export interface SocialProps {
    children: React.ReactNode;
    link: string;
}