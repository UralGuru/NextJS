import RadioBox from "../../../components/buttons/radioButton/RadioBox";
import s from './question.module.css';

function Question() {
    return <div>
        <div>
            <div>Question</div>


            <div className={s.part}>
                <div className={s.answers}>
                    <RadioBox checked={false} text={'Роман Мстиславич'} disabled={true}/>
                    <RadioBox checked={false} text={'Роман Алексеевич'} disabled={false}/>
                    <RadioBox checked={true} text={'Зигли Путба'} disabled={true}/>
                    <RadioBox checked={true} text={'Элвин Грей'} disabled={false}/>
                </div>
            </div>







        </div>

    </div>
  }

  export default Question
