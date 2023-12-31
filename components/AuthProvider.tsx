"use client"
import React, { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react';

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | null
}


type Providers = Record<string, Provider>

function AuthProviders() {

    const [provider, setProvider] = useState<Providers | null>(null)


    useEffect(() => {
        const fetchProvides = async () => {
            const res = await getProviders();
            setProvider(res)
        }
        fetchProvides();
    }, [])


    if (provider) {
        return (
            <div>
                {Object.values(provider).map((provider: Provider, i) => (
                    <button key={i} onClick={()=>signIn(provider?.id)}>
                        {provider.id}
                    </button>
                ))}
            </div>
        )
    }
}

export default AuthProviders;