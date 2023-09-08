import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User',{
  name : g.string().length({min:2, max:20}),
  email : g.string().unique(),
  avatarUrk : g.url(),
  description : g.string().optional(),   
  githubUrl : g.url().optional(),
  linkedinUrl : g.url().optional(),
  projects : g.relation(()=>Projects).list().optional(),
})

const Projects = g.model('Project',{
  title : g.string().length({min:2}),
  description : g.string(),
  image : g.url(),
  liveSiteUrl : g.url(),
  githubUrl : g.url(),
  category : g.string().search(),
  createdBy : g.relation(()=>User)
})

export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})