import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import { ChallengeDetailsCard } from './../ChallengeDetailsCard/ChallengeDetailsCard'
import './TypingChallengeContainer.css';

export const TypingChallengeContainer = ({ 
    handleKeyPress,
    timeRemaining,
    words,
    characters,
    mistakes,
    timerStarted,
    selectedParagraph
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard
                    cardName="Words typed"
                    cardValue={words}
                />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters typed"
                    cardValue={characters}
                />

                {/* Mistakes */}
                <ChallengeDetailsCard
                    cardName="Mistakes Committed"
                    cardValue={mistakes}
                />
            </div>

            {/* Typing Challenge */}
            <div className="type-challenge-cont">
                <TypingChallenge
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    handleKeyPress={handleKeyPress}
                    selectedParagraph={selectedParagraph}
                />
            </div>
        </div>
    )
}