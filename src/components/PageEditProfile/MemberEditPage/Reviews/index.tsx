import { useState } from "react"
import { dissociateMemberToElementChosen } from "../../../../utils";

export default function ReviewsEditProfilPageMember ({data}) {

    const [memberReviews, setMemberReviews] = useState(data.reviews)
    const [isEditMode, setIsEditMode] = useState(false)
  

    const deleteComment = (e) => {
        const idTraining = e.target.id;
        const idMember = data.id 
        console.log(idTraining)
        console.log(idMember)
    }

    const handleChange = (e) => {
        const value = e.target.value

    }
    
    

  
    return (
        <section>
            {memberReviews.map((review) => (
                <div key={review.id}>
                    <h2>{review.training.label}</h2>
                    {isEditMode ? <input type="text" value={review.comment} onChange={handleChange}/> : <p>{review.comment}</p>}
                    <button>Modifier le commentaire</button>
                    <button onClick={deleteComment} id={review.id}>Supprimer le commentaire</button>
                </div>
                
            ))}
        </section>
    )
}