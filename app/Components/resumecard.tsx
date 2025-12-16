import { Link } from "react-router";
import ScoreCircle from "~/Components/scorecircle";

type Feedback = {
    overallScore: number;
};

type Resume = {
    id: string;
    companyName: string;
    jobTitle: string;
    imagePath: string;
    resumePath: string;
    feedback: Feedback;
};

type ResumeCardProps = {
    resume: Resume;
};

const ResumeCard = ({ resume }: ResumeCardProps): JSX.Element => {
    const {
        id,
        companyName,
        jobTitle,
        imagePath,
        feedback,
    } = resume;

    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card animate-in fade-in duration-700"
        >
            {/* Header */}
            <div className="resume-card-header flex items-center justify-between gap-4">
                <div>
                    <h2 className="!text-black font-bold break-words">
                        {companyName}
                    </h2>

                    <h3 className="text-lg break-words text-gray-500">
                        {jobTitle}
                    </h3>
                </div>

                <div className="flex-shrink-0">
                    {/* ✅ REAL SCORE from constants.ts */}
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

            {/* Resume image */}
            <div className="gradient-border animate-in fade-in duration-1000 mt-4">
                <div className="w-full h-full bg-white">
                    <img
                        src={imagePath}
                        alt="resume"
                        className="w-full h-[350px] max-sm:h-[200px] object-cover"
                    />
                </div>
            </div>
        </Link>
    );
};

export default ResumeCard;
