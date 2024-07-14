import { data } from "@/app/contents/skill&about";

const Skills = () => {
    return (
        <div className="space-y-4">
            <div className="flex space-x-4 ">
                <div className="bg-thirdDarkPurple p-5 rounded-md flex-1 h-52 space-y-3">
                    <div className="text-white font-bold mb-2">{data.nameSec1}</div>
                    <div className="font-bold">Tools</div>
                    <div className="flex space-x-4">
                        <img src="/icons_figma.svg" alt="Figma" className="h-12 w-12" />
                        <img src="/icon_Ai.svg" alt="Adobe Illustrator" className="h-12 w-12" />
                    </div>
                    <div className="text-white text-xs mt-2">
                        <div>{data.designDetail1}</div>
                    </div>
                </div>

                <div className="bg-thirdDarkPurple p-5 rounded-md flex-1 h-52 space-y-3">
                    <div className="text-white  font-bold mb-2">{data.nameSec2}</div>
                    <div className="font-bold">Tools</div>
                    <div className="flex space-x-4">
                        <img src="/icons_vscode.svg" alt="VsCode" className="h-12 w-12" />
                        <img src="/icon_github.svg" alt="GitHub" className="h-12 w-12" />
                    </div>
                    <div className="text-white text-xs mt-2">
                        <div>{data.techDetail1}</div>
                        <div>{data.techDetail2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;
