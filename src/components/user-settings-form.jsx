import React from "react";
import { Button } from "react-day-picker";
import { useForm } from "react-hook-form";

function UserSettingsForm(){
    const {
        register, 
        handleSubmit,
        setValue
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={()=> handleSubmit(onSubmit)}>
                <Input 
                    placeholder = "Your Name"
                    {...register('name')}
                    id='name' 
                />
                <Input 
                    placeholder = "Your Email"
                    {...register('email')}
                    id='email' 
                />
                <Input 
                    placeholder = "Your slug"
                    {...register('slug')}
                    id='slug' 
                />
                <Input 
                    placeholder = "Your Bio"
                    {...register('bio')}
                    id='bio' 
                />
                <Input 
                    placeholder = "Your Name"
                    {...register('name')}
                    id='name' 
                />
                <Button type="submit">Save</Button>
                <button></button>
            </form>
        </div>
    )
}

export default UserSettingsForm;