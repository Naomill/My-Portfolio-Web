const Tech = ({ isHighlight, data }) => {
    return (
        <div>
            <div className="flex text-sm gap-2">
                {
                    data.map((e, i) => (
                        <div key={`${e}-tech-${i}`} className={`bg-bgBtnbSkill px-2 py-1 rounded-full ${isHighlight ? "text-primaryPurple" : ""}`}>
                            {e}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Tech;
