import React from 'react';
import { Button, Item, List } from 'semantic-ui-react';


const LinkButtons = ({ company, size }) => {

    //Circular buttons created from profile.social
    const buttons =
        (company && (
            company.facebook ||
            company.linkedin ||
            company.blogUrl ||
            company.androidUrl ||
            company.iosUrl ||
            company.demoUrl) ?
            <>
                {company.facebook ?
                    <Button
                        size={size}
                        as='a'
                        style={{ display: 'inline-block', margin: '0.2em' }}
                        href={'https://' + company.facebook}
                        target="_blank"
                        icon='facebook'
                        color='facebook'
                        circular />
                    : null}
                {company.linkedin ?
                    <Button
                        size={size}
                        as='a'
                        style={{ display: 'inline-block', margin: '0.2em' }}
                        href={'https://' + company.linkedin}
                        target="_blank"
                        icon='linkedin'
                        color='linkedin'
                        circular />
                    : null}
                {company.blogUrl ?
                    <Button
                        size={size}
                        as='a'
                        color='teal'
                        style={{ display: 'inline-block', margin: '0.2em' }}
                        href={company.blogUrl}
                        target="_blank"
                        icon='globe'
                        circular />
                    : null}
                {company.androidUrl ?
                    <Button
                        size={size}
                        as='a'
                        color='teal'
                        style={{ display: 'inline-block', margin: '0.2em' }}
                        href={company.androidUrl}
                        target="_blank"
                        icon='globe'
                        circular />
                    : null}
                {company.iosUrl ?
                    <Button
                        size={size}
                        as='a'
                        color='teal'
                        style={{ display: 'inline-block', margin: '0.2em' }}
                        href={company.iosUrl}
                        target="_blank"
                        icon='globe'
                        circular />
                    : null}
                {company.demoUrl ?
                    <Button
                        size={size}
                        as='a'
                        color='teal'
                        style={{ display: 'inline-block', margin: '0.2em' }}
                        href={company.demoUrl}
                        target="_blank"
                        icon='globe'
                        circular />
                    : null}
            </>
            : null)

    return (
        <List>
            {buttons}
        </List>
    )
}

export default LinkButtons;