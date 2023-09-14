'use client'
import { SessionInterface } from '@/common.types'
import React, { ChangeEvent } from 'react'
import { FormField } from './FormField'

type Props = {
    type: string,
    session: SessionInterface,

}

export const ProjectForm = ({ type, session }: Props) => {

    const image = null
    const handleSubmit = (e: React.FormEvent) => {

    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {

    }

    const handleStateChange = (fieldName: string, value: string) => {

    }

    const form = {
        image: '',
        title: '',
        description: '',
        liveSiteUrl: '',
        githubUrl: '',


    }


    return (
        <form
            onSubmit={handleSubmit}
            className='flexStart form'
        >
            <div className='flexStart form_image-container'>
                <label html_Form="poster" className='flexCenter form_image-label'>
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





            <div className='flexStart w-full'>
                <button> Create</button>

            </div>

        </form>
    )
}
