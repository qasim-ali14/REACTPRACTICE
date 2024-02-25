# REACTPRACTICE
# REACTPRACTICE
mostly react changes value for one or more places and propagate value in user interface.
for that we used hook.
it changes states in multiple places in UI.
/we have to make changes in four places here in jsx so react matches those changes with
    //main dom and apply these  all changes into them.
//virtual dom:
In index js file we used to creare a root this root create a virtually dom like tree like main dom of the browser.
then when we used to or want to make changes in states it will match will original dom and 
changes that value.Previosuly we reload and print the dom from the scratch which usually take time and  make wastege.
//fibre:
basically fibre has three steps or benefits:
1.pause the work
2.reuse the value again
3.abort (mean if any one changes make updation of one to three time then we first make that updation then changes our original value.In that we have to put that value on hold)
Mean we can abort any process and wait them then again execute them.
