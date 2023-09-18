'use client'
import { ProjectInterface, SessionInterface } from '@/common.types'
import React, { ChangeEvent, useState } from 'react'
import { FormField } from './FormField'
import { categoryFilters } from '@/app/constants'
import { CustomMenu } from './CustomMenu'
import Image from 'next/image'

import { createNewProject, fetchToken, updateProject } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Button from './Button'

type Props = {
    type: string,
    session: SessionInterface,
    project ?: ProjectInterface

}

export const ProjectForm = ({ type, session,project }: Props) => {


    const router = useRouter()
    const image = null
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        const {token} = await fetchToken()
        try{
            if(type === "create"){
                await createNewProject(form,session?.user?.id,token)

                router.push('/')
            }

            if (type === "edit") {
                await updateProject(form, project?.id as string, token)

                router.push("/")
            }

        }catch(err){
            console.log(err)
        }finally{
            setIsSubmitting(false)
        }
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const file = e.target.files?.[0]

        console.log(file)
        if (!file) return;


        if (!file.type.includes('image')) {
            return alert("Upload Image");

        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result as string;

            handleStateChange('image', result)
        }

    }

    const handleStateChange = (fieldName: string, value: string) => {
        setForm((prevState) => ({
            ...prevState,
            [fieldName]: value
        }))
    }


    const [isSubmitting, setIsSubmitting] = useState(false)

    const [form, setForm] = useState({
        image: project?.image || '',
        title: project?.title || '',
        description: project?.description || '',
        liveSiteUrl: project?.liveSiteUrl || '',
        githubUrl: project?.githubUrl || '',
        category: project?.category || '',
    })

    return (
        <form
            onSubmit={handleSubmit}
            className='flexStart form'
        >
            <div className='flexStart form_image-container'>
                <label htmlFor="poster" className='flexCenter form_image-label'>
                    {!image && "Choose Your image"}
                </label>
                <input
                    id="image"
                    type='file'
                    accept='image/*'
                    required={type === "create"}
                    className='form_image-input'
                    onChange={handleChangeImage}
                />

                {form.image && (
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20" alt="image"
                        fill
                    />
                )}
            </div>


            <FormField
                title="Title"
                state={form.title}
                placeholder="Flexxible"
                setState={(value) => handleStateChange('title', value)}
            />

            <FormField
                title="Description"
                state={form.description}
                placeholder="Your Description Here..."
                setState={(value) => handleStateChange('description', value)}
            />

            <FormField
                type={"url"}
                title="Website URL"
                state={form.liveSiteUrl}
                placeholder="Your Url Dude"
                setState={(value) => handleStateChange('liveSiteUrl', value)}
            />

            <FormField
                type={"url"}
                title="GitHub URL"
                state={form.githubUrl}
                placeholder="Github please..."
                setState={(value) => handleStateChange('githubUrl', value)}
            />


            <CustomMenu
                title="Category"
                state={form.category}
                setState={(value) => handleStateChange('category', value)}
                filters={categoryFilters}
            />


            <div className='flexStart w-full'>
               <Button
               title={
                isSubmitting 
                    ? `${type === 'create' ? 'Creating' : 'Editing'}`
                    :`${type === 'create' ? 'Create' : 'Edit'}`
               }
               type='submit'
               leftIcon = {isSubmitting ? "" : '/plus.svg'}
               submitting={isSubmitting}
/>

            </div>

        </form>
    )
}
