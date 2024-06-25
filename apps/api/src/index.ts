import { definedAbilityFor, projectSchema } from '@saas/auth'

const ability = definedAbilityFor({ role: 'MEMBER', id: 'user-id123' })

const project = projectSchema.parse({
  id: 'project-id',
  ownerId: 'user-id123',
})

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', project))

console.log(project)
