# Sedna website

## challenge
- can't use flex box or grid, have to make everything the old fashioned way
- Use BEM to name css classes

# changes from mentor
- don't use percentage for container, use px in max-width
- using position: absolute; without top and left values is not proper way of using it (nav bar)
- is using 100% better or using 100vw better?
- find a better to handle the 3 col layout, use width: calc();
- hover implementations for buttons and links


## BEM classes

### Heading
```
.heading-xxl{
    font-size: 60px;
    line-height: normal;
    font-weight: normal;
    letter-space: normal;
}

.heading-xl{
    font-size: 40px;
    line-height: normal;
    font-weight: 300;
    letter-space: normal;
}

.heading-lg{
    font-size: 24px;
    line-height: normal;
    font-weight: normal;
    letter-space: normal;
}

.heading-md{
    font-size: 15px;
    line-height: normal;
    font-weight: 600;
    letter-space: normal;
}

.heading-italic{
    font-style: italic;
}
```

have to see text color

### Buttons  

```
.btn{
    font-size: 13px;
    color: white;
}
```
Button size varieties  

```
.btn--xsm{padding: 7px 30px;}
.btn--sm{padding: 11px 35px;}
.btn--md{padding: 18px 36px;}
.btn--long{padding: 14px 144px;}
```

Colors and shapes  

```
.btn--outline-white-curve{
    color: white;
    background-color: transparent;
    border-radius: 40px;
}

.btn--solid-red-curve{
    color: white;
    background-color: red;
    border-radius: 40px;
}

.btn--outline-red-curve{
    color: red;
    background-color: transparent;
    border-radius: 40px;
}

.btn--solid-red-rect{
    color: red;
    background-color: red;
}
```



### Body text

```
.body-text{
    font-weight: 300;
    font-style: normal;
}
```
```
.body--lg{font-size: 20px;}
.body--md{font-size: 16px;}
.body--sm{font-size: 15px;}
```

color: var(--white);
color: var(--grey-blue);
color: var(--dark-slate-blue-70);
color: var(--cool-grey);
color: var(--steel-grey);
color: var(--slate-grey-two);



line-height: normal;
line-height: 1.56;
line-height: 1.67;
line-height: 2;

letter-spacing: normal;
letter-spacing: 2px;


### layouts
### Margin and padding utility classes

.pd-20{padding:20px;}
### border and border color

.border-right{
    border-right: 1px solid #e6e9ea;
}

.border-bottom{
    border-bottom: 1px solid #e6e9ea;
}
/* footer */
.border-top{
    border-top: 1px solid #4e566c;
}

.border-bottom-white{
    border-bottom: 1px solid #ffffff;
}

### center Div
- parent 
- child
